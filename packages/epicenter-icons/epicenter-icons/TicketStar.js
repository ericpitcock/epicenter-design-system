import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.25 15.5L14.5 14.2963L16.75 15.5L16.25 13.0926L18 11.4074L15.558 11.2088L14.5 9L13.442 11.2088L11 11.4074L12.75 13.0926L12.25 15.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 9.5V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89713 22 6.0017V17.9989C22 19.1034 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V14.5C3.38071 14.5 4.5 13.3807 4.5 12C4.5 10.6193 3.38071 9.5 2 9.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TicketStar',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
