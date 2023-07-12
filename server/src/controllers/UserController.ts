import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

class userController {
    verifyToken(req: Request, res: Response) {
        return res.send({userId: req.userId});  
    }

    async store(req: Request, res: Response) {
        const {email, password} = req.body;

        const userExists = await prisma.user.findUnique({where: {email}});

        if(userExists) {
            return res.sendStatus(409);
        }

        const user = await prisma.user.create({email, password});

        return res.json(user);
    }
}

export default new userController();