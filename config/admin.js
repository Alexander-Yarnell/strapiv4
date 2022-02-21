module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b5509b59902cb17b1df2770e329ddea2'),
  },
});
