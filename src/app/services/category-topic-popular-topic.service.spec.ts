import { TestBed } from '@angular/core/testing';

import { CategoryTopicPopularTopicService } from './category-topic-popular-topic.service';

describe('CategoryTopicPopularTopicService', () => {
  let service: CategoryTopicPopularTopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryTopicPopularTopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
