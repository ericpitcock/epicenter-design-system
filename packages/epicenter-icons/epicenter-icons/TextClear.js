import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.4855 20H8.49195M5.49843 20H8.49195M12.5 4L8.49195 20M12.5 4L7.0571 4.00003C6.14135 4.00003 5.34311 4.62458 5.12101 5.51486L5 5.9999M12.5 4H18.0017C18.6507 4 19.127 4.61118 18.9698 5.24223L18.7809 5.99987', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 15L19 20M14 20L19 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TextClear',
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
