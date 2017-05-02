-- prefix


module Main exposing (..)


isPrefix xs ys =
    case ( xs, ys ) of
        ( [], _ ) ->
            True

        ( _, [] ) ->
            False

        ( x :: xsTail, y :: ysTail ) ->
            x == y && isPrefix xsTail ysTail


isSublist xs ys =
    if isPrefix xs ys then
        True
    else
        case ys of
            [] ->
                False

            _ :: ysTail ->
                isSublist xs ysTail


type Tree a
    = Empty
    | Node a (Tree a) (Tree a)


findMax t =
    case t of
        Empty ->
            Nothing

        Node x left right ->
            List.foldl maybeMax (Just x) [ findMax left, findMax right ]



-- 2n + 1  -> black nodes is the longest path possible in a
-- n shortest is equal to black nodes -- where its all black nodes
{--  h <= 2b + 1 (min height), n >= 2^b-1 (min size
     h <= 2b+1 <= 2(log(n) +1 )

  }
--TODO fold.


maybeMax mx my =
    case ( mx, my ) of
        ( Just x, Just y ) ->
            Just (max x y)

        ( Nothing, _ ) ->
            my

        ( _, Nothing ) ->
            mx
