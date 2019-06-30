import WebsiteParserManager from './WebsiteParserManager';
import DefaultWebsiteParser from './DefaultWebsiteParser';

const websiteParserManager = new WebsiteParserManager();
const defaultWebsiteParser = new DefaultWebsiteParser();

websiteParserManager.parser = defaultWebsiteParser;
websiteParserManager.parseWebsite();