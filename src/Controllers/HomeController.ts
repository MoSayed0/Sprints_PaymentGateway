import { Request, Response } from "express";

export class HomeController {
  WelcomScreen(req: Request, res: Response) {
    return res.send(`<h1>Welcom To our Payment-Getway API</h1>
      <p style="font-size: 22px; fon-family: arial;">if you are a current user please sign in so you can use our services.</br>
      if you are not, please sign up.</p>
      `);
  }
}
