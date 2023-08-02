import { Component } from '@angular/core';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})export class BracketsComponent {
  input: string = '';
  result: boolean | null = null;

  check() {
    this.result = this.isValidBracketsSequence(this.input);
  }

  isValidBracketsSequence(input: string): boolean {
    const opening = ['(', '{', '['];
    const closing = [')', '}', ']'];
    const stack: string[] = [];

    for (let i = 0; i < input.length; i++) {
      const character = input[i];

      if (opening.includes(character)) {
        stack.push(character);
      } else if (closing.includes(character)) {
        const pos = closing.indexOf(character);
        const expected = opening[pos];

        if (stack.length === 0 || stack.pop() !== expected) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
}
