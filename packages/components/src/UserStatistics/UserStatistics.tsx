import { Icon } from '../Icon/Icon'
import { Box, Card, Flex } from 'theme-ui'
import { InternalLink } from '../InternalLink/InternalLink'
import { ExternalLink } from '../ExternalLink/ExternalLink'
import { ElWithBeforeIcon } from '../ElWithBeforeIcon/ElWithBeforeIcon'
import EventsIcon from '../../assets/icons/icon-events.svg'
import HowToCountIcon from '../../assets/icons/icon-how-to.svg'
import starActiveSVG from '../../assets/icons/icon-star-active.svg'

export interface UserStatisticsProps {
  userName: string
  country?: string
  isVerified: boolean
  isSupporter: boolean
  howtoCount: number
  eventCount: number
  usefulCount: number
}

export const UserStatistics = (props: UserStatisticsProps) => {
  const hasLocation =
    props.country !== undefined && props.userName !== undefined

  return (
    <Card
      sx={{
        p: 2,
        backgroundColor: 'background',
      }}
    >
      <Flex
        sx={{
          gap: 2,
          flexDirection: 'column',
        }}
      >
        {props.isVerified && (
          <Flex>
            <Icon glyph="verified" size={22} />
            <Box ml={1}>Verified</Box>
          </Flex>
        )}

        {hasLocation ? (
          <InternalLink to={'/map/#' + props.userName} sx={{ color: 'black' }}>
            <Flex>
              <Icon glyph="location-on" size={22} />
              <Box ml={1}>{props.country || 'View on Map'}</Box>
            </Flex>
          </InternalLink>
        ) : null}

        {props?.isSupporter ? (
          <Flex>
            <Icon glyph={'supporter'} size={22} />
            <Box ml={1}>
              <ExternalLink
                href="https://www.patreon.com/one_army"
                target="_blank"
                sx={{ color: 'black' }}
              >
                Supporter
              </ExternalLink>
            </Box>
          </Flex>
        ) : null}

        {props.usefulCount ? (
          <Flex>
            <ElWithBeforeIcon icon={starActiveSVG} />
            Useful:&nbsp;{props.usefulCount}
          </Flex>
        ) : null}

        {props.howtoCount ? (
          <Flex>
            <ElWithBeforeIcon icon={HowToCountIcon} />
            How‑to:&nbsp;{props.howtoCount}
          </Flex>
        ) : null}

        {props.eventCount ? (
          <Flex>
            <ElWithBeforeIcon icon={EventsIcon} />
            Events:&nbsp;{props.eventCount}
          </Flex>
        ) : null}
      </Flex>
    </Card>
  )
}
