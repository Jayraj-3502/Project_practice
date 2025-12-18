import { Slider, createStyles, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  mark: {
    width: 6,
    height: 6,
    borderRadius: 6,
    transform: "translateX(-3px) translateY(-2px)",
    borderColor:
      theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.red[1],
  },
  markFilled: {
    borderColor: theme.colors.red[6],
  },
  markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: theme.white,
    borderWidth: 1,
    boxShadow: theme.shadows.sm,
  },
}));

export default function SliderDemo() {
  const { classes } = useStyles();

  return (
    <>
      <Slider
        color="red"
        classNames={{
          track: classes.track,
          mark: classes.mark,
          markFilled: classes.markFilled,
          markLabel: classes.markLabel,
          thumb: classes.thumb,
        }}
      />
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/mantinedev"
        styles={(theme) => ({
          root: {
            backgroundColor: "green",
            border: 0,
            height: 42,
            paddingLeft: 20,
            paddingRight: 20,

            "&:hover": {
              backgroundColor: "blue",
              color: "white",
            },
          },
          label: {
            fontWeight: 100,
          },
        })}
      >
        Follow on Twitter
      </Button>
    </>
  );
}
