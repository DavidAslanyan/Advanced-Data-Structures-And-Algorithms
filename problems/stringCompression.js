var compress = function(chars) {
    let read = 0;
    let write = 0;

    while (read < chars.length) {
        let char = chars[read];
        let count = 0;

        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        chars[write++] = char;

        if (count > 1) {
            for (const int of String(count)) {
                chars[write++] = int;
            }
        }
    }

    return write;
};