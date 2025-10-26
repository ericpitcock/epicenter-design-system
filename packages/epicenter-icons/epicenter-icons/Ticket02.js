import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 15L9 6', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.83333 18.9444L9.47468 20.5858C10.2557 21.3668 11.5221 21.3668 12.3031 20.5858L20.5858 12.3031C21.3668 11.5221 21.3668 10.2557 20.5858 9.47468L18.9444 7.83333C18.1774 8.6004 16.9337 8.6004 16.1667 7.83333C15.3996 7.06627 15.3996 5.82262 16.1667 5.05556L14.5253 3.41421C13.7443 2.63316 12.4779 2.63317 11.6969 3.41421L3.41421 11.6969C2.63317 12.4779 2.63316 13.7443 3.41421 14.5253L5.05556 16.1667C5.82262 15.3996 7.06627 15.3996 7.83333 16.1667C8.6004 16.9337 8.6004 18.1774 7.83333 18.9444Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Ticket02',
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
