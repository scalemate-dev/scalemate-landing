import { apiClient } from "./client"

export async function submitQuizAnswers(email, quizAnswers) {
  return apiClient.post("/api/v1/quiz_submissions", {
    email,
    quiz_answers: quizAnswers,
  }, { skipAuth: true })
}

export async function requestMagicLink(email) {
  return apiClient.post("/api/v1/magic_links", {
    email,
  }, { skipAuth: true })
}
