import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { BookmarksState } from '../../state/bookmarks.reducer';
import * as fromBookmarksSelectors from '../../state/bookmarks.selectors';
import * as fromBookmarksActions from '../../state/bookmarks.actions';

@Component({
  selector: 'alx-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss']
})
export class BookmarksPage implements OnInit {

  bookmarks$: Observable<Bookmark[]>;

  constructor(private store: Store<BookmarksState>) {}

  ngOnInit(): void {
    this.bookmarks$ = this.store.pipe(
      select(fromBookmarksSelectors.selectBookmarksList)
    );
  }

  removeBookmark(id: number) {
    this.store.dispatch(fromBookmarksActions.removeBookmark({ id }));
  }
}
