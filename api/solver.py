from typing import List
from enum import Enum
from trie_builder import Trie


def get_valid_words(letters: str):
    # first letter will be the required letter
    req_letter = letters[0]
    valid_words = set()

    for letter in letters:
        letter_trie = Trie(letter)
        letter_words = letter_trie.valid_words(letters, req_letter)

        for word in letter_words:
            valid_words.add(word)

    return list(valid_words)


def get_word_hints(words) -> dict:
    prefixes = {}
    for word in words:
        prefix = word[:2].upper()
        if prefix not in prefixes:
            prefixes[prefix] = 0
        prefixes[prefix] += 1
    hints = [(key, value) for key, value in prefixes.items()]
    return hints


def get_words_bingo(words) -> Enum:
    bingo = {}
    lengths = {}
    for word in words:
        letter = word[0]
        length = len(word)

        if letter not in bingo:
            bingo[letter] = {"total": 0}
        if length not in bingo[letter]:
            bingo[letter][length] = 0
        if length not in lengths:
            lengths[length] = 0

        bingo[letter][length] += 1
        bingo[letter]["total"] += 1
        lengths[length] += 1

    return bingo, lengths


"""
       4  5  6  8  9  10   TOTAL
    W  8  5  3  2  0  1
    O  4  2  1  0  0  1
    R
    D
    L
    E
    S
TOTAL

"""
