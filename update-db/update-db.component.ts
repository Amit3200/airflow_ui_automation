import {
  Component,
  OnInit
} from '@angular/core';
import {
  GetNamesDbService
} from '../get-names-db.service';
import {
  Http,
  Response
} from '@angular/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-db',
  templateUrl: './update-db.component.html',
  styleUrls: ['./update-db.component.css'],
  providers: [GetNamesDbService],
})
export class UpdateDbComponent implements OnInit {
  api_address: string = 'https://api.myjson.com/bins/e7r0z';
  dB_Objects: any = []
  text_data: any
  json_data: any
  isfill: boolean = true;
  isclicked: boolean = true;
  isshown: boolean = false;
  constructor(public dB_obj: GetNamesDbService, public http: Http) {}

  ngOnInit() {
    this.dB_obj.getDbNames().subscribe(response => {
      this.text_data = response.text();
      this.json_data = JSON.parse(this.text_data);
      this.json_data.forEach(collection => {
        this.dB_Objects.push(collection);
      });
    });
  }

  get_name(): void {
    console.log(this.dB_Objects);
    this.isclicked = false;
    this.isshown = true;
  }
  check_null(s) {
    if (s === null || s == undefined || s.lenght <= 1 || s == '' || s == ' ')
      return "None";
    else
      return s.toString();
  }
  fill_to_form(collection) {
    collection.sqlString = this.check_null(collection.sqlString);
    collection.alwaysAlertRequired = this.check_null(collection.alwaysAlertRequired);
    collection.dataSource = this.check_null(collection.dataSource);
    collection.databaseName = this.check_null(collection.databaseName);
    collection.enabled = this.check_null(collection.enabled);
    collection.name = this.check_null(collection.name);
    //failure start
    try {
      collection.Failure.attachmentRequired = this.check_null(collection.onSuccess.attachmentRequired);
      collection.Failure.bodyTitle = this.check_null(collection.onSuccess.bodyTitle);
      collection.Failure.daap = this.check_null(collection.onSuccess.daap);
      collection.Failure.dynamicBodyText = this.check_null(collection.onSuccess.dynamicBodyText);
      collection.Failure.mailEntity.mailAddress.fromAddress = this.check_null(collection.onSuccess.mailEntity.mailAddress.fromAddress);
      collection.Failure.mailEntity.mailAddress.fromName = this.check_null(collection.onSuccess.mailEntity.mailAddress.fromName);
      collection.Failure.mailEntity.mailAddress.bccAddress = this.check_null(collection.onSuccess.mailEntity.mailAddress.bccAddress);
      collection.Failure.mailEntity.mailAddress.ccAddress = this.check_null(collection.onSuccess.mailEntity.mailAddress.ccAddress);
      collection.Failure.mailEntity.mailAddress.replytoAddress = this.check_null(collection.onSuccess.mailEntity.mailAddress.replytoAddress);
      collection.Failure.mailEntity.mailAddress.toAddress = this.check_null(collection.onSuccess.mailEntity.mailAddress.toAddress);
      collection.Failure.mailEntity.mailContent.attachType = this.check_null(collection.onSuccess.mailEntity.mailContent.attachType);
      collection.Failure.mailEntity.mailContent.attachment = this.check_null(collection.onSuccess.mailEntity.mailContent.attachment);
      collection.Failure.mailEntity.mailContent.body = this.check_null(collection.onSuccess.mailEntity.mailContent.body);
      collection.Failure.mailEntity.mailContent.customAttachement = this.check_null(collection.onSuccess.mailEntity.mailContent.customAttachement);
      collection.Failure.mailEntity.mailContent.file = this.check_null(collection.onSuccess.mailEntity.mailContent.file);
      collection.Failure.mailEntity.mailContent.fileName = this.check_null(collection.onSuccess.mailEntity.mailContent.fileName);
      collection.Failure.mailEntity.mailContent.subject = this.check_null(collection.onSuccess.mailEntity.mailContent.subject);
      collection.Failure.mailEntity.product = this.check_null(collection.onSuccess.mailEntity.product);
      collection.Failure.tableRequired = this.check_null(collection.onSuccess.tableRequired);
    } catch (err) {}
    // failure end
    collection.onSuccess.attachmentRequired = this.check_null(collection.onSuccess.attachmentRequired);
    collection.onSuccess.bodyTitle = this.check_null(collection.onSuccess.bodyTitle);
    collection.onSuccess.daap = this.check_null(collection.onSuccess.daap);
    collection.onSuccess.dynamicBodyText = this.check_null(collection.onSuccess.dynamicBodyText);
    collection.onSuccess.mailEntity.mailAddress.fromAddress = this.check_null(collection.onSuccess.mailEntity.mailAddress.fromAddress);
    collection.onSuccess.mailEntity.mailAddress.fromName = this.check_null(collection.onSuccess.mailEntity.mailAddress.fromName);
    collection.onSuccess.mailEntity.mailAddress.bccAddress = this.check_null(collection.onSuccess.mailEntity.mailAddress.bccAddress);
    collection.onSuccess.mailEntity.mailAddress.ccAddress = this.check_null(collection.onSuccess.mailEntity.mailAddress.ccAddress);
    collection.onSuccess.mailEntity.mailAddress.replytoAddress = this.check_null(collection.onSuccess.mailEntity.mailAddress.replytoAddress);
    collection.onSuccess.mailEntity.mailAddress.toAddress = this.check_null(collection.onSuccess.mailEntity.mailAddress.toAddress);
    collection.onSuccess.mailEntity.mailContent.attachType = this.check_null(collection.onSuccess.mailEntity.mailContent.attachType);
    collection.onSuccess.mailEntity.mailContent.attachment = this.check_null(collection.onSuccess.mailEntity.mailContent.attachment);
    collection.onSuccess.mailEntity.mailContent.body = this.check_null(collection.onSuccess.mailEntity.mailContent.body);
    collection.onSuccess.mailEntity.mailContent.customAttachement = this.check_null(collection.onSuccess.mailEntity.mailContent.customAttachement);
    collection.onSuccess.mailEntity.mailContent.file = this.check_null(collection.onSuccess.mailEntity.mailContent.file);
    collection.onSuccess.mailEntity.mailContent.fileName = this.check_null(collection.onSuccess.mailEntity.mailContent.fileName);
    collection.onSuccess.mailEntity.mailContent.subject = this.check_null(collection.onSuccess.mailEntity.mailContent.subject);
    collection.onSuccess.mailEntity.product = this.check_null(collection.onSuccess.mailEntity.product);
    collection.onSuccess.tableRequired = this.check_null(collection.onSuccess.tableRequired);
    collection.schedule = this.check_null(collection.schedule);
    document.getElementById('sqlString').value = (collection.sqlString).toString();
    document.getElementById('alwaysAlertRequired').value = (collection.alwaysAlertRequired).toString();
    document.getElementById('dataSource').value = (collection.dataSource).toString();
    document.getElementById('databaseName').value = (collection.databaseName).toString();
    document.getElementById('enabled').value = (collection.enabled).toString();
    document.getElementById('name').value = (collection.name).toString();
    // ONFAILURE
    try {
      document.getElementById('fattachmentRequired').value = (collection.onFailure.attachmentRequired).toString();
      document.getElementById('fbodyTitle').value = (collection.onFailure.bodyTitle).toString();
      document.getElementById('fdaap').value = (collection.onFailure.daap).toString();
      document.getElementById('fdynamicBodyText').value = (collection.onFailure.dynamicBodyText).toString();
      document.getElementById('ffromAddress').value = (collection.onFailure.mailEntity.mailAddress.fromAddress).toString();
      document.getElementById('ffromName').value = (collection.onFailure.mailEntity.mailAddress.fromName).toString();
      document.getElementById('fbccAddress').value = (collection.onFailure.mailEntity.mailAddress.bccAddress).toString();
      document.getElementById('fccAddress').value = (collection.onFailure.mailEntity.mailAddress.ccAddress).toString();
      document.getElementById('freplytoAddress').value = (collection.onFailure.mailEntity.mailAddress.replytoAddress).toString();
      document.getElementById('ftoAddress').value = (collection.onFailure.mailEntity.mailAddress.toAddress).toString();
      document.getElementById('fattachType').value = (collection.onFailure.mailEntity.mailContent.attachType).toString();
      document.getElementById('fattachment').value = (collection.onFailure.mailEntity.mailContent.attachment).toString();
      document.getElementById('fbody').value = (collection.onFailure.mailEntity.mailContent.body).toString();
      document.getElementById('fcustomAttachement').value = (collection.onFailure.mailEntity.mailContent.customAttachement).toString();
      document.getElementById('ffile').value = (collection.onFailure.mailEntity.mailContent.file).toString();
      document.getElementById('ffileName').value = (collection.onFailure.mailEntity.mailContent.fileName).toString();
      document.getElementById('fsubject').value = (collection.onFailure.mailEntity.mailContent.subject).toString();
      document.getElementById('fproduct').value = (collection.onFailure.mailEntity.product).toString();
      document.getElementById('ftableRequired').value = (collection.onFailure.tableRequired).toString();
    } catch (err) {
      document.getElementById('fattachmentRequired').value = "None";
      document.getElementById('fbodyTitle').value = "None";
      document.getElementById('fdaap').value = "None";
      document.getElementById('fdynamicBodyText').value = "None";
      document.getElementById('ffromAddress').value = "None";
      document.getElementById('ffromName').value = "None";
      document.getElementById('fbccAddress').value = "None";
      document.getElementById('fccAddress').value = "None";
      document.getElementById('freplytoAddress').value = "None";
      document.getElementById('ftoAddress').value = "None";
      document.getElementById('fattachType').value = "None";
      document.getElementById('fattachment').value = "None";
      document.getElementById('fbody').value = "None";
      document.getElementById('fcustomAttachement').value = "None";
      document.getElementById('ffile').value = "None";
      document.getElementById('ffileName').value = "None";
      document.getElementById('fsubject').value = "None";
      document.getElementById('fproduct').value = "None";
      document.getElementById('ftableRequired').value = "None";
    }
    //OffFAILURE
    document.getElementById('attachmentRequired').value = (collection.onSuccess.attachmentRequired).toString();
    document.getElementById('bodyTitle').value = (collection.onSuccess.bodyTitle).toString();
    document.getElementById('daap').value = (collection.onSuccess.daap).toString();
    document.getElementById('dynamicBodyText').value = (collection.onSuccess.dynamicBodyText).toString();
    document.getElementById('fromAddress').value = (collection.onSuccess.mailEntity.mailAddress.fromAddress).toString();
    document.getElementById('fromName').value = (collection.onSuccess.mailEntity.mailAddress.fromName).toString();
    document.getElementById('bccAddress').value = (collection.onSuccess.mailEntity.mailAddress.bccAddress).toString();
    document.getElementById('ccAddress').value = (collection.onSuccess.mailEntity.mailAddress.ccAddress).toString();
    document.getElementById('replytoAddress').value = (collection.onSuccess.mailEntity.mailAddress.replytoAddress).toString();
    document.getElementById('toAddress').value = (collection.onSuccess.mailEntity.mailAddress.toAddress).toString();
    document.getElementById('attachType').value = (collection.onSuccess.mailEntity.mailContent.attachType).toString();
    document.getElementById('attachment').value = (collection.onSuccess.mailEntity.mailContent.attachment).toString();
    document.getElementById('body').value = (collection.onSuccess.mailEntity.mailContent.body).toString();
    document.getElementById('customAttachement').value = (collection.onSuccess.mailEntity.mailContent.customAttachement).toString();
    document.getElementById('file').value = (collection.onSuccess.mailEntity.mailContent.file).toString();
    document.getElementById('fileName').value = (collection.onSuccess.mailEntity.mailContent.fileName).toString();
    document.getElementById('subject').value = (collection.onSuccess.mailEntity.mailContent.subject).toString();
    document.getElementById('product').value = (collection.onSuccess.mailEntity.product).toString();
    document.getElementById('tableRequired').value = (collection.onSuccess.tableRequired).toString();
    document.getElementById('schedule').value = (collection.schedule).toString();
  }
  set_and_display(idxid, name): void {
    var collection = this.dB_Objects[idxid];
    this.fill_to_form(collection);
    this.isfill = false;
  }
  //amit3200:submit form updating UI create/update in same.
  update_db_form(): void {
    var sqlString = document.getElementById('sqlString').value
    var alwaysAlertRequired = document.getElementById('alwaysAlertRequired').value
    var dataSource = document.getElementById('dataSource').value
    var databaseName = document.getElementById('databaseName').value
    var enabled = document.getElementById('enabled').value
    var name = document.getElementById('name').value
    var fattachementRequired = document.getElementById('fattachmentRequired').value
    var fbodyTitle = document.getElementById('fbodyTitle').value
    var fdaap = document.getElementById('fdaap').value
    var fdynamicBodyText = document.getElementById('fdynamicBodyText').value
    var ffromAddress = document.getElementById('ffromAddress').value
    var ffromName = document.getElementById('ffromName').value
    var fbccAddress = document.getElementById('fbccAddress').value
    var fccAddress = document.getElementById('fccAddress').value
    var freplytoAddress = document.getElementById('freplytoAddress').value
    var ftoAddress = document.getElementById('ftoAddress').value
    var fattachType = document.getElementById('fattachType').value
    var fattachment = document.getElementById('fattachment').value
    var fbody = document.getElementById('fbody').value
    var fcustomAttachment = document.getElementById('fcustomAttachement').value
    var ffile = document.getElementById('ffile').value
    var ffileName = document.getElementById('ffileName').value
    var fsubject = document.getElementById('fsubject').value
    var fproduct = document.getElementById('fproduct').value
    var ftableRequired = document.getElementById('ftableRequired').value
    var attachementRequired = document.getElementById('attachmentRequired').value
    var bodyTitle = document.getElementById('bodyTitle').value
    var daap = document.getElementById('daap').value
    var dynamicBodyText = document.getElementById('dynamicBodyText').value
    var fromAddress = document.getElementById('fromAddress').value
    var fromName = document.getElementById('fromName').value
    var bccAddress = document.getElementById('bccAddress').value
    var ccAddress = document.getElementById('ccAddress').value
    var replytoAddress = document.getElementById('replytoAddress').value
    var toAddress = document.getElementById('toAddress').value
    var attachType = document.getElementById('attachType').value
    var attachment = document.getElementById('attachment').value
    var body = document.getElementById('body').value
    var customAttachment = document.getElementById('customAttachement').value
    var file = document.getElementById('file').value
    var fileName = document.getElementById('fileName').value
    var subject = document.getElementById('subject').value
    var product = document.getElementById('product').value
    var tableRequired = document.getElementById('tableRequired').value
    var schedule = document.getElementById('schedule').value
    //create json
    var user_updated_data = {
      "sqlString": sqlString,
      "alwaysAlertRequired": alwaysAlertRequired,
      "dataSource": dataSource,
      "databaseName": databaseName,
      "enabled": enabled,
      "name": name,
      "onFailure": {
        "attachementRequired": fattachementRequired,
        "bodyTitle": fbodyTitle,
        "daap": fdaap,
        "dynamicBodyText": fdynamicBodyText,
        "mailEntity": {
          "mailAddress": {
            "fromAddress": ffromAddress,
            "fromName": ffromName,
            "bccAddress": fbccAddress,
            "ccAddress": fccAddress,
            "replytoAddress": freplytoAddress,
            "toAddress": ftoAddress,
          },
          "mailContent": {
            "attachType": fattachType,
            "attachment": fattachment,
            "body": fbody,
            "customAttachement": fcustomAttachment,
            "file": ffile,
            "fileName": ffileName,
            "subject": fsubject,
          },
          "product": fproduct,
        },
        "tableRequired": ftableRequired,
      },
      "onSuccess": {
        "attachementRequired": attachementRequired,
        "bodyTitle": bodyTitle,
        "daap": daap,
        "dynamicBodyText": dynamicBodyText,
        "mailEntity": {
          "mailAddress": {
            "fromAddress": fromAddress,
            "fromName": fromName,
            "bccAddress": bccAddress,
            "ccAddress": ccAddress,
            "replytoAddress": replytoAddress,
            "toAddress": toAddress,
          },
          "mailContent": {
            "attachType": attachType,
            "attachment": attachment,
            "body": body,
            "customAttachement": customAttachment,
            "file": file,
            "fileName": fileName,
            "subject": subject,
          },
          "product": product,
        },
        "tableRequired": tableRequired,
      },
      "schedule": schedule,
    }
    console.log(user_updated_data);
    console.log("Individually done");
    var the_post_url = '';
    this.http.post(the_post_url, user_updated_data).subscribe(response => {
        let json_response = response.json();
        if (json_response.status == true) {
          Swal.fire(
            'Data Updated',
            'All the records are updated and saved',
            'success'
          );
        } else {
          Swal.fire(
            'Operation Failed',
            'All the records are updated and saved',
            'warning'
          );
        }
      },
      error => {
        Swal.fire(
          'Oops!',
          'Something went wrong please try again later',
          'warning'
        );
      });
    setTimeout(function () {
      location.reload();
    }, 5000);
  }

}
