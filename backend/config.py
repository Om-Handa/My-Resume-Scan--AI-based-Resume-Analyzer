class Config:

    SECRET_KEY = "secretkey"

    SQLALCHEMY_DATABASE_URI = \
    'mysql+pymysql://root:omhanda246@localhost/resume_analyzer'

    SQLALCHEMY_TRACK_MODIFICATIONS = False