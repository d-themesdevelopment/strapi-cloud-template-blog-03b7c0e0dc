module.exports = ({ env }) => ({
  "website-builder": {
    enabled: true,
    config: {
      url: env('VERCEL_HOOK_URL', ""),
      trigger: {
        type: "manual",
      },
      body: {
        target: {
          ref_type: "branch",
          type: "pipeline_ref_target",
          ref_name: "main",
        },
      },
      headers: {
        "Content-Type": "application/json",
      },
    },
  },
});
