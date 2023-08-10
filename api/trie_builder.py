from typing import List
from dictionary.constants import DICTIONARIES


class Trie:
    def __init__(self, letter: str):
        self.root = {}
        self.end = "*"
        self.build_trie(letter)

    def get_dictionary(self, letter: str) -> List[str]:
        return DICTIONARIES[letter]

    def build_trie(self, letter: str) -> None:
        word_list = self.get_dictionary(letter)
        for word in word_list:
            self.insert(word)

    def insert(self, word: str) -> None:
        current = self.root

        for letter in word:
            if letter not in current:
                current[letter] = {}
            current = current[letter]
        current[self.end] = True

    def contains_word(self, word):
        current = self.root
        for letter in word:
            if letter not in current:
                return False
            current = current[letter]
        return self.end in current

    def valid_words(self, letters: List[str], req_letter: str) -> List[str]:
        return self._valid_words_helper(self.root, letters, req_letter, "", set())

    def _valid_words_helper(
        self,
        current: dict,
        letters: List[str],
        req_letter: str,
        partial: str,
        found: set,
    ):
        if self.end in current and len(partial) > 3 and req_letter in partial:
            found.add(partial)
        for letter in letters:
            if letter in current:
                new_partial = partial + letter
                new_current = current[letter]
                new_found = self._valid_words_helper(
                    new_current, letters, req_letter, new_partial, found
                )
                for each in new_found:
                    found.add(each)
        return found

