class WebsiteParserManager {
    constructor() {
        this._parser = null;
    }

    set parser(parser) {
        this._parser = parser;
    }

    get parser() {
        return this._parser;
    }

    parseWebsite() {
        this._parser.parseWebsite();
    }
}

export default WebsiteParserManager;