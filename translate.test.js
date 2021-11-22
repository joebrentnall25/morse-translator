import {it,expect,describe} from "@jest/globals";
import {translate} from "./index.js"

describe("Tests for english to morse", () => {
    describe("Tests for single characters", () => {
        it("Inputting a should return .-", () => {
            const result = translate('a', 0);
            expect(result).toBe('.-');
        });
        it("Inputting d should return -..", () => {
            const result = translate('d', 0);
            expect(result).toBe('-..');
        });
        it("Inputting z should return --..", () => {
            const result = translate('z', 0);
            expect(result).toBe('--..');
        });
    });

    describe("Tests for single numbers", () => {
        it("Inputting 1 should return .----", () => {
            const result = translate('1', 0);
            expect(result).toBe('.----');
        });
        it("Inputting 9 should return ----.", () => {
            const result = translate('9',0);
            expect(result).toBe('----.');
        });
        it("Inputting 0 should return -----", () => {
            const result = translate('0',0);
            expect(result).toBe('-----');
        });
    });

    describe("Tests for string of characters", () => {
        it("Inputting me should return -- .", () => {
            const result = translate('me',0);
            expect(result).toBe('-- .');
        });
        it("Inputting hello should return .... . .-.. .-.. ---", () => {
            const result = translate('hello',0);
            expect(result).toBe('.... . .-.. .-.. ---');
        });
        it("Inputting word should return .-- --- .-. -..", () => {
            const result = translate('word',0);
            expect(result).toBe('.-- --- .-. -..');
        });
    });

    describe("Tests for multiple words", () => {
        it("Inputting hello world should return .... . .-.. .-.. --- / .-- --- .-. .-.. -..", () => {
            const result = translate('hello world',0);
            expect(result).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
        });
        it("Inputting hello should return .... . .-.. .-.. ---.", () => {
            const result = translate('this is a nology project',0);
            expect(result).toBe('- .... .. ... / .. ... / .- / -. --- .-.. --- --. -.-- / .--. .-. --- .--- . -.-. -');
        });
    });

    describe("Tests for invalid inputs", () => {
        it("Inputting ! should return ", () => {
            const result = translate('!', 0);
            expect(result).toBe('#');
        });
        it("Inputting -.. should return d", () => {
            const result = translate('.', 0);
            expect(result).toBe('#');
        });
        it("Inputting --.. should return z", () => {
            const result = translate('a.b.c', 0);
            expect(result).toBe(".- # -... # -.-.");
        });
    });
});

describe("Tests for morse to english", () => {
    describe("Tests for single characters", () => {
        it("Inputting .- should return a", () => {
            const result = translate('.-', 1);
            expect(result).toBe('a');
        });
        it("Inputting -.. should return d", () => {
            const result = translate('-..', 1);
            expect(result).toBe('d');
        });
        it("Inputting --.. should return z", () => {
            const result = translate('--..', 1);
            expect(result).toBe('z');
        });
    });

    describe("Tests for invalid inputs", () => {
        it("Inputting -....- should return #", () => {
            const result = translate('-....-', 1);
            expect(result).toBe('#');
        });
        it("Inputting -.1 should return #", () => {
            const result = translate('-.1', 1);
            expect(result).toBe('#');
        });
        it("Inputting abc should return #", () => {
            const result = translate('abc', 1);
            expect(result).toBe('#');
        });
    });

    describe("Tests for single numbers", () => {
        it("Inputting .---- should return 1", () => {
            const result = translate('.----', 1);
            expect(result).toBe('1');
        });
        it("Inputting ----. should return 9", () => {
            const result = translate('----.',1);
            expect(result).toBe('9');
        });
        it("Inputting ----- should return 0", () => {
            const result = translate('-----',1);
            expect(result).toBe('0');
        });
    });

    describe("Tests for string of characters", () => {
        it("Inputting -- . should return me", () => {
            const result = translate('-- .',1);
            expect(result).toBe('me');
        });
        it("Inputting .... . .-.. .-.. --- should return hello", () => {
            const result = translate('.... . .-.. .-.. ---',1);
            expect(result).toBe('hello');
        });
        it("Inputting .-- --- .-. -.. should return word", () => {
            const result = translate('.-- --- .-. -..',1);
            expect(result).toBe('word');
        });
    });

    describe("Tests for multiple words", () => {
        it("Inputting .... . .-.. .-.. --- / .-- --- .-. .-.. -.. should return hello world", () => {
            const result = translate('.... . .-.. .-.. --- / .-- --- .-. .-.. -..',1);
            expect(result).toBe('hello world');
        });
        it("Inputting - .... .. ... / .. ... / .- / -. --- .-.. --- --. -.-- / .--. .-. --- .--- . -.-. - should return this is a nology project", () => {
            const result = translate('- .... .. ... / .. ... / .- / -. --- .-.. --- --. -.-- / .--. .-. --- .--- . -.-. -',1);
            expect(result).toBe('this is a nology project');
        });
    });
});

