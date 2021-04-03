import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { DeleteOutlined } from '@material-ui/icons';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.category === 'work') {
                return '2px solid #FFD700';
            }
            else if (note.category === 'money') {
                return '2px solid #32CD32';
            }
            else if (note.category === 'reminders') {
                return '2px solid #1E90FF';
            }
            else if (note.category === 'todos') {
                return '2px solid #DC143C';
            }
        }
    },
    deleteIcon: {
        color: (note) => {
            if (note.category === 'work') {
                return '#FFD700';
            }
            else if (note.category === 'money') {
                return '#32CD32';
            }
            else if (note.category === 'reminders') {
                return '#1E90FF';
            }
            else if (note.category === 'todos') {
                return '#DC143C';
            }
        }
    },
    avatarColor: {
        backgroundColor: (note) => {
            if (note.category === 'work') {
                return '#FFD700';
            }
            else if (note.category === 'money') {
                return '#32CD32';
            }
            else if (note.category === 'reminders') {
                return '#1E90FF';
            }
            else if (note.category === 'todos') {
                return '#DC143C';
            }
        }
    },
    capitalize: {
        textTransform: "capitalize"
    }
})

const NoteCard = ({ note, handleDelete }) => {

    const classes = useStyles(note);

    return (
        <div>
            <Card elevation={3} className={classes.test}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatarColor}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined className={classes.deleteIcon} />
                        </IconButton>
                    }
                    className={classes.capitalize}
                    title={note.title}
                    subheader={note.category}
                ></CardHeader>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default NoteCard;
