exports.requireLogin = (req, res, next) => {
    if (req.session && req.session.user) {
        return next();
    }
    else {
        return res.redirect('/login');
    }
}

exports.requireAdminLogin = (req, res, next) => {
    if (req.session && req.session.admin) {
        return next();
    } else {
        return res.redirect("/adminLogin")
    }
}