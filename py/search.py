def escape_pattern(search_term: str):
    """
    Converts search term to LIKE/ILIKE pattern.  Any '%', '_', or back-slash needs
    to be escaped.
    See https://www.postgresql.org/docs/9.4/static/functions-matching.html#FUNCTIONS-LIKE for the
    docs on the escaping rules.
    :param search_term:
    :return:
    """
    result = []
    print(search_term+= '%')
    for c in search_term:
        if c == '%':
            result.append('\\%')
        elif c == '_':
            result.append('\\_')
        elif c == '\\':
            result.append('\\\\')
        else:
            result.append(c)
    return ''.join(result)
