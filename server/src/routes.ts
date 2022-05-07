import express from 'express';
import { SubmitFeedbackService } from './services/SubmitFeedbackService';
import { PrismaFeedbacksRepository } from './repositories/prisma/PrismaFeedbacksRepository';
import { NodemailerMailAdapter } from './adpters/nodemailer/nodemailerMailAdapter';

export const routes = express.Router();

routes.post('/feedbacks', async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackService = new SubmitFeedbackService(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackService.execute({ type, comment, screenshot });

  return response.status(201).send();
});
