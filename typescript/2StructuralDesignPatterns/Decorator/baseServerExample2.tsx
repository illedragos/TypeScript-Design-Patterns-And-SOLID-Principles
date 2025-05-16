interface IServerRequest {
  handle(request: any): void;
}

class BaseServer implements IServerRequest {
  handle(request: any) {
    console.log(`Return ressponse from request${JSON.stringify(request)}`);
  }
}

abstract class ServerRequestDecorator implements IServerRequest {
  constructor(protected serverRequest: IServerRequest) {
    this.serverRequest = serverRequest;
  }
  abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestDecorator {
  handle(request: any): void {
    console.log(`Logging in request ${JSON.stringify(request)}`);
    this.serverRequest.handle(request);
  }
}

class AuthMiddleware extends ServerRequestDecorator {
  handle(request: any): void {
    if (request.isAuthenticated) {
      console.log("request is authenticated");
      this.serverRequest.handle(request);
    } else {
      console.log("unauthorized access");
    }
  }
}

//CLient code

const request = {
  isAuthenticated: true,
  body: "hello there",
};

let server: IServerRequest = new BaseServer();
server = new LoggingMiddleware(server);
server = new AuthMiddleware(server);
server.handle(request);

const request2 = {
  isAuthenticated: false,
  body: "hello there",
};

server.handle(request2);
