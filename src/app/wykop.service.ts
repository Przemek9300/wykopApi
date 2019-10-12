import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Md5 } from "ts-md5";
import { RootObject } from "./store/model";
@Injectable({
  providedIn: "root"
})
export class WykopService {
  constructor(private http: HttpClient) {}
  public getPost(tag: string, page:number): Observable<RootObject> {
    const url = `${environment.wykop}${tag}/appkey/${environment.key}/output/clear/page/${page}`;
    const apisign = Md5.hashAsciiStr(`${environment.secret}${url}`) as string;

    return this.http.post<RootObject>(url, null, {
      headers: {
        apisign: apisign
      }
    });
  }
}
