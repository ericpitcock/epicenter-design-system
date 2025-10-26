import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.45946 20L20.5567 8.68934C22.3317 7.30882 22.495 4.68503 20.905 3.09501C19.315 1.50499 16.6912 1.66834 15.3107 3.4433L4 18.5405' })
const _hoisted2 = h('path', { 'd': 'M10 17L7 14' })
const _hoisted3 = h('circle', { 'cx': '18.5', 'cy': '18.5', 'r': '2.5' })
const _hoisted4 = h('path', { 'd': 'M5.31371 18.6863C6.22876 19.6013 6.22876 21.0849 5.31371 22L2 18.6863C2.91506 17.7712 4.39865 17.7712 5.31371 18.6863Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BaseballBat',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
