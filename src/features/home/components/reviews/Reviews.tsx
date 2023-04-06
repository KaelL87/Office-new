import React from 'react';

import { Avatar, Box, Button, Rating, Stack, TextField, Typography } from '@mui/material';
import ReactTimeAgo from 'react-time-ago';

import user1 from '@/assets/user1.png';
import useSafeState from '@/hooks/useSafeState';

const Reviews: React.FC = () => {
  const [text, setText] = useSafeState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setText(event.target.value);
  };
  return (
    <Box flexDirection={'row'}>
      <Stack>
        <Box display={'flex'} flexDirection={'column'} rowGap={1} mb={3}>
          <Box display={'flex'}>
            <Box mr={2}>
              <Avatar src={user1} sx={{ width: 40, height: 40 }} />
            </Box>
            <Box>
              <Typography variant="body1" fontSize={14} fontWeight={600} color="black">
                Hector Amed
              </Typography>
              <Typography variant="body2" fontSize={11} fontWeight={400} color="GrayText">
                <ReactTimeAgo date={new Date('12/17/2022')} locale="en-US" />
              </Typography>
            </Box>
          </Box>
          <Box>
            <Rating name="read-only" readOnly value={4} precision={0.5} sx={{ color: '#FDC500' }} />
          </Box>
          <Box maxWidth={'80%'}>
            <Typography variant="body2" fontSize={12} fontWeight={400} color="black">
              Excellent course for beginners. Helped me to learn and understand trading concepts -
              associate contents very well. Some parts from dev and sysops course made this couse
              unique. I found the course metrial very useful. Hector`s English is very much
              understandable to me. If someone gonna take this course practice after every video
              end. Thanks Hector😊👍
            </Typography>
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} rowGap={1} mb={3}>
          <Box display={'flex'}>
            <Box mr={2}>
              <Avatar src={user1} sx={{ width: 40, height: 40 }} />
            </Box>
            <Box>
              <Typography variant="body1" fontSize={14} fontWeight={600} color="black">
                Hector Amed
              </Typography>
              <Typography variant="body2" fontSize={11} fontWeight={400} color="GrayText">
                <ReactTimeAgo date={new Date('08/11/2022')} locale="en-US" />
              </Typography>
            </Box>
          </Box>
          <Box>
            <Rating name="read-only" readOnly value={4} precision={0.5} sx={{ color: '#FDC500' }} />
          </Box>
          <Box maxWidth={'80%'}>
            <Typography variant="body2" fontSize={12} fontWeight={400} color="black">
              Excellent course for beginners. Helped me to learn and understand trading concepts -
              associate contents very well. Some parts from dev and sysops course made this couse
              unique. I found the course metrial very useful. Hector`s English is very much
              understandable to me. If someone gonna take this course practice after every video
              end. Thanks Hector😊👍
            </Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Box maxWidth={'80%'}>
            <TextField
              fullWidth
              multiline
              placeholder="Write your review here..."
              InputProps={{
                rows: 5,
              }}
              sx={{
                backgroundColor: '#EEF0F4',
                borderRadius: '8px',
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.20)',
                border: 0,
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#0349d9b5',
                  },
                },
                '.MuiOutlinedInput-notchedOutline': { border: 0 },
              }}
              value={text}
              onChange={handleChange}
            />
          </Box>
          <Box mt={3}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#00509D',
                textTransform: 'initial',
                '&:hover': {
                  backgroundColor: '#00296B',
                  borderColor: '#0062cc',
                  boxShadow: 'none',
                },
                '&:active': {
                  boxShadow: 'none',
                  backgroundColor: '#00296B',
                  borderColor: '#005cbf',
                },
              }}
            >
              Post your review
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Reviews;
