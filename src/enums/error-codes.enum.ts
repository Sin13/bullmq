export enum ErrorCodes {
  JobNotExist = -1,
  JobLockNotExist = -2,
  JobNotInState = -3,
  JobPendingDependencies = -4,
  ParentJobNotExist = -5,
  ParentJobCompleted = -6,
}