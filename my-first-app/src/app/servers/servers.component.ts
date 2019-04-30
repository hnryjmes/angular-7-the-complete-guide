import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  servers = ['Testserver', 'Testserver 2'];
  isDetailsVisible = false;
  clicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onToggleDisplayDetails() {
    this.clicks.push(new Date().toLocaleTimeString());
    console.log(this.clicks);
    this.isDetailsVisible = !this.isDetailsVisible;
  }
}
