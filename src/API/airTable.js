import Airtable from "airtable";

const apiConfig = {
  apiKey: "keyv7sHqzJx3CNjUp",
  baseToken: "appbBH2HPUYrrBv1u"
};

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: apiConfig.apiKey
});
const base = Airtable.base(apiConfig.baseToken);
export default base;
