import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 2H14M14 2H20M14 2L12 5.5M9 5.5H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 16H20M12 8V16', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 15.5C4 13.3081 4.45039 11.2664 4.85758 9.86842C5.19318 8.71621 6.27809 8 7.47818 8H16.5218C17.7219 8 18.8068 8.7162 19.1424 9.86839C19.5496 11.2664 20 13.3081 20 15.5C20 17.6201 19.5786 19.3187 19.1825 20.4472C18.8335 21.4415 17.8552 22 16.8014 22H7.19856C6.14477 22 5.16643 21.4415 4.81743 20.4471C4.42136 19.3187 4 17.62 4 15.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CableCar',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
