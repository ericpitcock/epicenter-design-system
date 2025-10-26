import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 12L6.67845 20.3922C6.86542 21.3271 7.68625 22 8.63961 22H15.3604C16.3138 22 17.1346 21.3271 17.3216 20.3922L19 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.0228 3.0098C9.73094 0.680579 5.50526 2.67586 6.01269 6.00282C2.0713 5.95775 1.9589 12 5.90147 12L18.0748 12C21.9993 12 21.9623 5.92764 18.039 5.97291C18.5155 2.65667 14.3053 0.690008 12.0228 3.0098Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 12L14 22' })

export default defineComponent({
    name: 'Popcorn',
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
