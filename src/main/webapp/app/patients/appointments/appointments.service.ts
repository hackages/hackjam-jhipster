import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Appointment } from './appointments.model';

@Injectable()
export class AppointmentsService {

    private resourceUrl = 'api/appointments';

    constructor(private http: HttpClient) { }

    create(appointment: Appointment): Observable<Appointment> {
        return this.http.post(this.resourceUrl, appointment);
    }

    query(req?: any): Observable<Appointment[]> {
        // const options = createRequestOption(req);
        return this.http.get<Appointment[]>(this.resourceUrl, {params: req});
    }

}
