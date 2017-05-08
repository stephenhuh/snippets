module RedBlackTrees exposing (..)


type Color
    = R
    | B


type Tree
    = E
    | T Color (Tree a) a (Tree a)



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
            False

        T R _ _ (T R _ _ _) ->
            False

        T _ l _ r ->
            noRedRed 1
                && noRedRed r
                    False



-- every path from root of t to a leaf contains same number of black nodes


blackHeight t =
    case t of
        E ->
            Just 0

        T c l _ r ->
            blackHeight l
                |> Maybe.andThen
                    (\n ->
                        blackHeight r
                            |> Maybe.andThen
                                (\m ->
                                    if n /= m then
                                        Nothing
                                    else if c == B then
                                        Just (1 + n)
                                    else
                                        Just n
                                )
                    )



-- -> What are the 4 invariants for RB Trees


ins : comparable -> Tree comparable -> Tree comparable
ins x t =
    case t of
        E ->
            T R E x E

        T c l y r ->
            if x == y then
                t
                -- default to no equal cases
            else if x < y then
                balance c (ins x l) y r
            else
                balance c l y (ins x r)


balance : Color -> Tree comparable -> comparable -> Tree comparable -> Tree comparable
balance c l val r =
    case ( c, l, val, r ) of
        ( B, T R (T R a x b) y c, z, d ) ->
            T R (T B a x b) y (T B c z d)

        -- all resolve to case where red is parent with left and right black children -- this case handles a black root, red left child, red left grandchild
        ( B, T R a x (T R b y c), z, d ) ->
            T R (T B a x b) y (T B c z d)

        -- left red child with left-right red grandchild
        ( B, a, x, T R (T R b y c) z d ) ->
            T R (T B a x b) y (T B c z d)

        ( B, a, x, T R b y (T R c z d) ) ->
            T R (T B a x b) y (T B c z d)

        _ ->
            T cl l val r
