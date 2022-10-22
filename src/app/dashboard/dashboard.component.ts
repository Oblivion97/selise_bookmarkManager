import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bookmarkList: any[] = [];
  categoryList: string[] = [];

  addBookmarkForm: FormGroup;

  showAddPanel: Boolean = false
  showAddPanelForDetails: Boolean = false


  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    // private notifier: NotifierService,
  ) {
    // this.categoryList = ['qqweqe', 'qeqqwe']



    // this.bookmarkList = [
    //   {
    //     title: 'jstutorial',
    //     url: 'somelink.com',
    //     category: 'c1'
    //   },
    //   {
    //     title: 'jstutorial1',
    //     url: 'somelink1.com',
    //     category: 'c1'
    //   },
    //   {
    //     title: 'jstutorial2',
    //     url: 'somelink2.com',
    //     category: 'c1'
    //   },
    //   {
    //     title: 'jstutorial3',
    //     url: 'somelink3.com',
    //     category: 'c2'
    //   },
    //   {
    //     title: 'jstutorial4',
    //     url: 'somelink4.com',
    //     category: 'c2'
    //   }
    // ]

    this.addBookmarkForm = this.formBuilder.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      cate: [null, Validators.required]

    });

  }

  ngOnInit(): void {

  }

  add() {
    this.showAddPanel = true
    this.showAddPanelForDetails = false
  }

  onCategoryChange() {

  }


  addbookmark() {
    if (this.addBookmarkForm.value.title == '' || this.addBookmarkForm.value.url == '') {
      return
    }
    if (this.addBookmarkForm.value.url != '') { 
      let valid = this.addBookmarkForm.value.url.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/)
      if (valid == false) { 
        return
      }
    }
    let title = this.bookmarkList.find(BL => { BL.title == this.addBookmarkForm.value.title })
    if (title != null) {
      return;
    }
    let category = this.bookmarkList.find(BL => { BL.cate == this.addBookmarkForm.value.cate })
    if (category != null) {
      return;
    }
    let bookmark = {
      title: this.addBookmarkForm.value.title,
      url: this.addBookmarkForm.value.url,
      category: 'category1'
    }
    this.bookmarkList.push(bookmark)

    this.addBookmarkForm.reset();
    this.showAddPanel = false;
  }

  cancel() {
    this.showAddPanel = false;
  }


  showDetails(bookmark: any) {
    this.showAddPanel = false
    this.showAddPanelForDetails = true
    this.addBookmarkForm.controls['title'].setValue(bookmark.title)
    this.addBookmarkForm.controls['url'].setValue(bookmark.url)
    this.addBookmarkForm.controls['cate'].setValue(bookmark.category)
  }
}
