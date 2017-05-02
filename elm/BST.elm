module BST exposing (..)


type Tree a
    = Empty
    | Node a (Tree a) (Tree a)


empty : Tree a
empty =
    Empty


singleton : a -> Tree a
singleton v =
    Node v Empty Empty


insert : comparable -> Tree comparable -> Tree comparable
insert x tree =
    case tree of
        Empty ->
            singleton x

        Node y left right ->
            if x > y then
                Node y left (insert x right)
            else if x < y then
                Node y (insert x left) right
            else
                tree


fromList : List comparable -> Tree comparable


depth : Tree a -> Int
