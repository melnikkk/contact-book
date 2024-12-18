import { PrismaClient } from '@prisma/client';
import { CONTACTS } from './data';

const prisma = new PrismaClient();

async function main() {
  await prisma.contact.createMany({
    data: CONTACTS,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
