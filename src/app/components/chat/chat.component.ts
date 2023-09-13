import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from './chat.service';

@Component({
  templateUrl: './chat.component.html',
})

export class ChatComponent implements OnInit {
  prompt: string = '';
  resp: any;

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.chatService.sendMessage(this.prompt).subscribe(response => {
      this.resp = response;
    })
  }
}