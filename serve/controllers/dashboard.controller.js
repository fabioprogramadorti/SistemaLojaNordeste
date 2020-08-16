router.get("/historico", async (req, res) => {
    try {
     res.send(200);
    } catch (error) {
        return res.status(500).send(`ERRO:${error.message}`);
    }
});

module.exports = router;