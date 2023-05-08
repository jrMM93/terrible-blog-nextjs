import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // 10 Users
  const usersPromises = [];
  for (let i = 0; i < 10; i++) {
    const user = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
    };
    usersPromises.push(
      prisma.user.create({
        data: user,
      })
    );
  }

  const users = await Promise.all(usersPromises);

  // 5 Categories
  const categoriesPromises = [];
  for (let i = 0; i < 5; i++) {
    const category = {
      label: faker.word.adjective(),
    };
    categoriesPromises.push(
      prisma.category.create({
        data: category,
      })
    );
  }

  const categories = await Promise.all(categoriesPromises);

  // 100 Posts
  const postsPromises = [];
  for (let i = 0; i < 100; i++) {
    const randomUserIndex = faker.datatype.number({
      min: 0,
      max: users.length - 1,
    });

    const randomCategoryIndex = faker.datatype.number({
      min: 0,
      max: categories.length - 1,
    });

    const randomWorldCount = faker.datatype.number({
      min: 25,
      max: 50,
    });

    const post = {
      title: faker.lorem.sentence(3),
      content: faker.lorem.sentence(randomWorldCount),
      slug: faker.lorem.slug(3),
      authorId: users[randomUserIndex].id,
      categoryId: categories[randomCategoryIndex].id,
    };

    postsPromises.push(
      prisma.post.create({
        data: post,
      })
    );
  }

  await Promise.all(postsPromises);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch(async (error) => {
    // eslint-disable-next-line no-console
    console.error(error);

    await prisma.$disconnect();

    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  });
