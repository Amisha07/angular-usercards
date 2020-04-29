import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class UserRxService {
  private usersUrl = "https://randomuser.me/api/?nat=us&results=50";

  constructor(private http: Http) {}

  /**
   * Get all users
   */
  getUsers() {
    return this.http.get(this.usersUrl);
  }
}
