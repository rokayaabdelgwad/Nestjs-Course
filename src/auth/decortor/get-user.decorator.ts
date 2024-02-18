import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    if (data) {
        // Use optional chaining operator (?.) to safely access properties
        return request.user?.[data];
    }
    // Use nullish coalescing operator (??) to provide a default value if request.user is undefined
    return request.user ?? null;
  },
);