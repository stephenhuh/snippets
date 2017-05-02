module RedBlackTrees exposing (..)


type Color
    = R
    | B


type Tree
    = E
    | T Color Tree Int Tree



-- what is T here? color is red or black, Tree is the left or right subtree and Int has value, but why do we have a T here?


color t =
    case t of
        T c _ _ _ ->
            c

        E ->
            B



-- this is... given a tree first check if


bso t =
    case t of
        E ->
            True

        T _ l x r ->
            (l == E || root l < x)
                && (r == E || x < root r)
                && bso l
                && bso r


root t =
    case t of
        T _ _ x _ ->
            x

        E ->
            Debug.crash "root"



-- TODO reimplement BSO until you have it engrained in your head.
-- no red node in t has a red child. That is noRedRed t == True where ...


noRedRed t =
    case t of
        E ->
            True

        T R (T R _ _ _) _ _ ->

        T R _ _ (T R _ _ _) ->
            False

        T _ l _ r ->
            noRedRed 1 && noRedRed r
            False


-- every path from root of t to a leaf contains same number of black nodes
blackHeight t = case t of



-- -> What are the 4 invariants for RB Trees
