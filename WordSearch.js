// 79. Word Search Leetcode 3.8.24

/*
Given an m x n grid of characters board and a string word,
return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells,
where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once.
*/

// Code

var exist = function(board, word) {
    let current_word = []
    let search_x = 0
    let search_y = 0

    board.forEach((list, x) => {
        list.forEach((element, y) => {
            for (let d = 0; d < 4; d++) {
                for (let i = 0; i < word.length; i++) {
                    if (board[x][y])
                }
            }
        })
    })

    console.log(current_word)
};

board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "ABCCED"

exist(board, word)