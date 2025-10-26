import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 10C19.1667 9.44768 19.1667 8.55229 18.5 8C17.8333 7.44771 17.8333 6.55229 18.5 6M15.5 10C16.1667 9.44768 16.1667 8.55229 15.5 8C14.8333 7.44771 14.8333 6.55229 15.5 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 12.9953V10.264C5 9.06157 6.05346 8.13096 7.24673 8.2793L8.04659 8.37873C8.64923 8.45364 9.1852 8.79832 9.50337 9.31558L13 15M9 3.99915C9 5.10326 8.10457 5.99831 7 5.99831C5.89543 5.99831 5 5.10326 5 3.99915C5 2.89505 5.89543 2 7 2C8.10457 2 9 2.89505 9 3.99915Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 13.0097L4.65169 20.4343C4.85521 21.3492 5.66674 22 6.60397 22H17.3957C18.3331 22 19.1447 21.3489 19.348 20.4339L21 13M3 13.0097L2 13M3 13.0097L21 13M21 13L22 13.0097', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HotTube',
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
