import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
    await prisma.superHeroe.create({
        data: {
            name: 'Batman',
            weakness: 'bats'
        }
    })
    const allUsers = await prisma.superHeroe.findMany()
    console.log(allUsers)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
    })