import { rest } from "msw";
import { TEST_API_DATA_INCLUDED_SUPRA } from "./data/evaluateSupra";
import { TEST_API_DATA_INCLUDED_SUPRA_SP2 } from "./data/evaluateSupraSP2";
import { TEST_API_DATA_INCLUDED_SUPRA_SP2_EMPTY } from "./data/evaluateSupraEmptySP2";

export const evaluateHandlers = [
  // Evaluate (post)
  // https://cloud.google.com/apis/design/custom_methods?hl=ko#http_mapping
  // NOTE: our api server use :custom url notation
  // But MSW do not support these custom mapping,
  // Because MSW use colon for capturing parameters.
  // So we have to use ugly hack.
  //
  // For Production
  // POST :60011/sentences/1:evaluate
  //
  // For Development
  // POST :60011/sentences/1-evaluate
  // rest.post("localhost/sentences/:sentenceId-evaluate", (req, res, ctx) => {
  //   // const { sentenceId, evaluate } = req.params;
  //   // return res(ctx.status(200), ctx.json(TEST_API_DATA_INCLUDED_SUPRA_EMPTY));
  //   return res(ctx.status(200), ctx.json(TEST_API_DATA_INCLUDED_SUPRA));
  // }),
  rest.post("localhost/sentences/:sentenceId/evaluate", (req, res, ctx) => {
    // return res(ctx.status(200), ctx.json(TEST_API_DATA_INCLUDED_SUPRA));
    // return res(ctx.status(200), ctx.json(TEST_API_DATA_INCLUDED_SUPRA_EMPTY));
    // return res(ctx.status(200), ctx.json(TEST_API_DATA_INCLUDED_SUPRA));
    // return res(
    //   ctx.status(200),
    //   ctx.json(TEST_API_DATA_INCLUDED_SUPRA_SP2_EMPTY)
    // );
    return res(ctx.status(200), ctx.json(TEST_API_DATA_INCLUDED_SUPRA_SP2));
  }),
];
