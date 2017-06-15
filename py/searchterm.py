def search_term_to_pattern(search_term: str):
    result = ['%']
    for c in search_term:
        if c == '%':
            result.append('\\%')
        elif c == '_':
            result.append('\\_')
        elif c == '\\':
            result.append('\\\\')
        elif c == ' ':
            result.append('\\%')
        else:
            result.append(c)
    result.append('%')
    return ''.join(result)

