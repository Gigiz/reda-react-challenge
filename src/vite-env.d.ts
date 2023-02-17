/// <reference types="vite/client" />
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers"
declare global {
  namespace Vi {
    interface JestAssertion<T = any> extends jest.Matchers<void, T>, TestingLibraryMatchers<T, void> {}
  }
}

interface User {
  id: number
  uuid: string
  first_name: string
  last_name: string
  username: string
  email: string
  avatar: URL
}
