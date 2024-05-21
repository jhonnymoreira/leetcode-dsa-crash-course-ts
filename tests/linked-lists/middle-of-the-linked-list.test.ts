import {
  ListNode,
  middleNode,
} from '@/linked-lists/middle-of-the-linked-list.js';

describe('Linked Lists: Middle of the Linked List', () => {
  test.each([
    {
      head: new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
      ),
      output: new ListNode(3, new ListNode(4, new ListNode(5, null))),
    },
    {
      head: new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(
            3,
            new ListNode(4, new ListNode(5, new ListNode(6, null)))
          )
        )
      ),
      output: new ListNode(4, new ListNode(5, new ListNode(6, null))),
    },
  ])('middleNode($head) === $output', ({ head, output }) => {
    expect(middleNode(head)).toStrictEqual(output);
  });
});
